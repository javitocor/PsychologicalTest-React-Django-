from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import AnswerSerializer, QuestionSerializer
from . import models
from rest_framework.response import Response 
from rest_framework.decorators import action, api_view, permission_classes

# Create your views here.
class QuestionViewSet(viewsets.ModelViewSet):
  queryset = models.Question.objects.all()
  serializer_class = QuestionSerializer

  def create(self, request):
        serializer = QuestionSerializer(
        data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True) 
        serializer.save()
        return Response(serializer.data)

  @action(detail=False, methods=['POST','GET'])
  def answers(self, request, pk):
      question = models.Question.objects.get(pk=pk)
      if request.method == 'GET':
          self.serializer_class = AnswerSerializer
          queryset = models.Answer.objects.filter(question=question)
          serializer = AnswerSerializer(queryset,many=True, context={'request':request})
          return Response(serializer.data)
      else:
          self.serializer_class = AnswerSerializer
          queryset = models.Answer.objects.filter(question=question)
          serializer = AnswerSerializer(data=request.data, context={'request':request})
          serializer.is_valid(raise_exception=True)
          serializer.save(question=question)
          return Response(serializer.data)

  @action(detail=False, methods=['DELETE'])
  def remove_answer(self, request, pk, answer):
      answer = models.Answer.objects.get(pk=answer)
      if answer.delete():
          return Response({'message':'Answer deleted'})
      else:
          return Response({'message':'unable to delete answer'})
