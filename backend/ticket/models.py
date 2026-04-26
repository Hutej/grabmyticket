from django.db import models


class Booking(models.Model):
	name = models.CharField(max_length=120)
	contact = models.CharField(max_length=20)
	email = models.EmailField()
	city = models.CharField(max_length=120)
	event_type = models.CharField(max_length=50)
	event_name = models.CharField(max_length=120)
	tickets = models.PositiveIntegerField()
	total_cost = models.PositiveIntegerField()
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.name} - {self.event_name} ({self.tickets})"
