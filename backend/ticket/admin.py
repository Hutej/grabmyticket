from django.contrib import admin

from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
	list_display = (
		'name',
		'contact',
		'event_name',
		'tickets',
		'total_cost',
		'created_at',
	)
	search_fields = ('name', 'contact', 'email', 'event_name', 'city')
	list_filter = ('event_type', 'created_at')
