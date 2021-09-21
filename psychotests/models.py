from django.db import models
# Create your models here.
 
class Question(models.Model):
    text = models.CharField(max_length=255)
    topic = models.CharField(max_length=255, null=True, blank=True, default=None)
    
    def __str__(self):
        return self.text

class Answer(models.Model):
    text = models.CharField(max_length=255)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    value = models.PositiveIntegerField()

    def __str__(self):
        return self.text
