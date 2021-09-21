from rest_framework import  serializers
from .models import Question, Answer 

class AnswerSerializer(serializers.ModelSerializer):
  class Meta:
        model = Answer
        fields = ['text', 'question', 'value']

class QuestionSerializer(serializers.ModelSerializer):
  answers = AnswerSerializer(
        many=True,
        read_only=True
    )
  class Meta:
        model = Question
        fields = ['id', 'text', 'topic', 'answers']