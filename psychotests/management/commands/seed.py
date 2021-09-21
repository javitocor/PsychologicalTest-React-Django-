from django.core.management.base import BaseCommand
from ...models import Question, Answer

class Command(BaseCommand):
  def handle(self, *args, **options):
    self.stdout.write('seeding data...')
    seed_questions()
    # clear_data()
    self.stdout.write('done.')

def clear_data():
  print("Delete Question instances")
  Question.objects.all().delete()

def seed_questions():
  questions = ['You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
  'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
  'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
  'You are taking part in a guided tour of a museum. You:',
  'During dinner parties at your home, you have a hard time with people who:',
  'You crack a joke at work, but nobody seems to have noticed. You:',
  'This morning, your agenda seems to be free. You:',
  'During dinner, the discussion moves to a subject about which you know nothing at all. You:',
  'You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:',
  'At work, somebody asks for your help for the hundredth time. You:',
  'You’ve been see a movie with your family and the reviews are mixed. You:',
  'A friend arrives late for your meeting. You:',
  'You can’t find your car keys. You:',
  'It’s time for your annual appraisal with your boss. You:']
  answers = ['Don’t dare to interrupt them','Think it’s more important to give them some of your time; work can wait','Listen, but with only with half an ear','Interrupt and explain that you are really busy at the moment',
  'Look at your watch every two minutes','Bubble with inner anger, but keep quiet','Explain to other equally impatient people in the room that the doctor is always running late','Complain in a loud voice, while tapping your foot impatiently',
  'Don’t dare contradict them','Think that they are obviously right','Defend your own point of view, tooth and nail','Continuously interrupt your colleague',
  'Are a bit too far towards the back so don’t really hear what the guide is saying','Follow the group without question','Make sure that everyone is able to hear properly','Are right up the front, adding your own comments in a loud voice',
  'Ask you to tell a story in front of everyone else','Talk privately between themselves','Hang around you all evening','Always drag the conversation back to themselves',
  'Think it’s for the best — it was a lame joke anyway','Wait to share it with your friends after work','Try again a bit later with one of your colleagues','Keep telling it until they pay attention',
  'Know that somebody will find a reason to come and bother you','Heave a sigh of relief and look forward to a day without stress','Question your colleagues about a project that’s been worrying you','Pick up the phone and start filling up your agenda with meetings',
  'Don’t dare show that you don’t know anything about the subject','Barely follow the discussion','Ask lots of questions to learn more about it','Change the subject of discussion',
  'Notice that they’re alone, but don’t go over to talk with them','Go and have a chat with them','Shoot some friendly smiles in their direction','Hardly notice them at all',
  'Give them a hand, as usual','Accept — you’re known for being helpful','Ask them, please, to find somebody else for a change','Loudly make it known that you’re annoyed',
  'Don’t share your point of view with anyone','Didn’t like the film, but keep your views to yourself when asked','State your point of view with enthusiasm','Try to bring the others round to your point of view',
  'Say, ‘It’s not a problem,’ even if that’s not what you really think','Give them a filthy look and sulk for the rest of the evening','Tell them, ‘You’re too much! Have you seen the time?’','Make a scene in front of everyone',
  'Don’t want anyone to find out, so you take the bus instead','Panic and search madly without asking anyone for help','Grumble without telling your family why you’re in a bad mood','Accuse those around you for misplacing them',
  'Go with great hesitation as these sessions are torture for you','Look forward to hearing what your boss thinks about you and expects from you','Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting','Go along unprepared as you are confident and like improvising']

  for i, quest in enumerate(questions):
    question = Question(
      topic='psychology',
      text=quest
    )
    question.save()

    initial=i*4
    end=i+4
    selected_answers = answers[initial:end]
    for index, y in enumerate(selected_answers):
      if index == 0:
        value_ans = 2
      elif index == 3:
        value_ans = 8
      else:
        value_ans = index * 2
        
      answer = Answer(
        text=y,
        question = question.id,
        value = value_ans
      )
      answer.save()




