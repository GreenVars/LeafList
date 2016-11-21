from django.contrib.auth.models import User
from django.db import models


class Forest(models.Model):
    forest_name = models.CharField(max_length=40)


class Tree(models.Model):
    forest = models.ForeignKey(Forest, on_delete=models.CASCADE)
    tree_name = models.charField(max_length=100)
    pub_date = models.DateTimeField('date created')


class Branch(models.Model):
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    branch_name = models.charField(max_length=100)
    pub_date = models.DateTimeField('date created')


class Leaf(models.Model):
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    title = models.charField(max_length=200)
    votes = models.IntegerField(default=0)
    submitted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField('date created')


class Badge(models.Model):
    leaf = models.ForeignKey(Leaf, on_delete=models.CASCADE)
    tag = models.charField(max_length=30)


class Comment(models.Model):
    submitted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_text = models.charField(max_length=1000)
