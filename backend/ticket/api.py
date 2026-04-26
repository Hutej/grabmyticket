from typing import List

from ninja import Schema
from ninja.errors import HttpError
from ninja_extra import NinjaExtraAPI, api_controller, route

from .models import Booking

api = NinjaExtraAPI(title="GrabMyShow API", version="0.1.0")

EVENTS_CATALOG = {
    "Concert": [
        {"name": "Coldplay Concert", "price": 500},
        {"name": "Techno Night", "price": 700},
    ],
    "Movie": [
        {"name": "Avengers Movie", "price": 300},
        {"name": "Batman Movie", "price": 280},
    ],
    "Sports": [
        {"name": "Cricket Match", "price": 800},
        {"name": "Football Match", "price": 750},
    ],
    "Comedy": [
        {"name": "Stand-up Comedy Show", "price": 400},
    ],
    "Conference": [
        {"name": "Tech Conference", "price": 600},
    ],
}


class EventOut(Schema):
    type: str
    name: str
    price: int


class BookingIn(Schema):
    name: str
    contact: str
    email: str
    city: str
    event_type: str
    event_name: str
    tickets: int


class BookingOut(Schema):
    id: int
    name: str
    contact: str
    email: str
    city: str
    event_type: str
    event_name: str
    tickets: int
    total_cost: int


@api_controller("/events", tags=["events"])
class EventsController:
    @route.get("", response=List[EventOut])
    def list_events(self):
        data = []
        for event_type, event_list in EVENTS_CATALOG.items():
            for event in event_list:
                data.append(
                    {
                        "type": event_type,
                        "name": event["name"],
                        "price": event["price"],
                    }
                )
        return data


@api_controller("/bookings", tags=["bookings"])
class BookingsController:
    @route.get("", response=List[BookingOut])
    def list_bookings(self):
        return Booking.objects.order_by("-created_at")[:100]

    @route.post("", response=BookingOut)
    def create_booking(self, payload: BookingIn):
        if payload.tickets <= 0:
            raise HttpError(400, "Tickets must be at least 1")

        matched = [
            item
            for item in EVENTS_CATALOG.get(payload.event_type, [])
            if item["name"] == payload.event_name
        ]
        if not matched:
            raise HttpError(400, "Selected event is not available")

        total_cost = matched[0]["price"] * payload.tickets

        booking = Booking.objects.create(
            name=payload.name,
            contact=payload.contact,
            email=payload.email,
            city=payload.city,
            event_type=payload.event_type,
            event_name=payload.event_name,
            tickets=payload.tickets,
            total_cost=total_cost,
        )
        return booking


api.register_controllers(EventsController, BookingsController)
