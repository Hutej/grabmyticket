# GrabMyShow MVP

Very simple ticket booking MVP:
- Frontend: React + Vite
- Backend: Django + Django Ninja + Ninja Extra
- Data: static events for now, bookings saved in DB
- Auth: only Django admin login (no user authentication flows)

## Project Structure

- Frontend app: `grabmyticket/`
- Backend app: `backend/`

## Backend Setup

1. Move to backend folder:
	- `cd backend`
2. Install packages:
	- `d:\Grabmyshow\venv\Scripts\python.exe -m pip install -r requirements.txt`
3. Run migrations:
	- `d:\Grabmyshow\venv\Scripts\python.exe manage.py migrate`
4. Create admin user:
	- `d:\Grabmyshow\venv\Scripts\python.exe manage.py createsuperuser`
5. Start server:
	- `d:\Grabmyshow\venv\Scripts\python.exe manage.py runserver`

Backend URLs:
- Admin: `http://127.0.0.1:8000/admin/`
- API docs: `http://127.0.0.1:8000/api/docs`
- Events API: `http://127.0.0.1:8000/api/events`
- Bookings API: `http://127.0.0.1:8000/api/bookings`

## Frontend Setup

1. Move to frontend folder:
	- `cd grabmyticket`
2. Install packages:
	- `npm install`
3. Start app:
	- `npm run dev`

Frontend URL:
- `http://127.0.0.1:5173/`

## Notes

- Event options are static right now in backend code (`ticket/api.py`).
- Bookings are saved in DB and visible in Django admin.
- Later you can replace static events with DB-driven events from admin.
