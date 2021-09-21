from rest_framework import  serializers
from .models import Question, Answer 

class AnswerSerializer(serializers.ModelSerializer):
  class Meta:
        model = Answer
        fields = ['text', 'question']

class QuestionSerializer(serializers.ModelSerializer):
  answers = AnswerSerializer(read_only=True)
  class Meta:
        model = Question
        fields = ['text', 'topic', 'answers']