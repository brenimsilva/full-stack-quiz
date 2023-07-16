using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_app.Context;
using quiz_app.DTOs;
using quiz_app.Models;

namespace quiz_app.Services;

public class QuestionService
{
    private QuestionContext _context;
    private AnswerContext _answerContext;
    private AnswerService _answerService;

    public QuestionService(QuestionContext context, AnswerContext answerContext, AnswerService answerService)
    {
        this._context = context;
        this._answerContext = answerContext;
        this._answerService = answerService;
        
    }
    
    public IEnumerable<Question> GetAll(int skip, int take)
    {
        return _context.Question.Skip(skip).Take(take);
    }

    public Question GetById(int id)
    {
        Question question = _context.Question.FirstOrDefault(e => e.Id == id);
        if (question == null) return null;
        return question;
    }

    public Question Add(QuestionDTO question)
    {
        
        Question questionCompleted = new Question()
        {
            created_at = DateTime.Now,
            updated_at = DateTime.Now,
            QuestionText = question.questionText,
            Id = 0
        };

        _context.Add(questionCompleted);
        _context.SaveChanges();
        return questionCompleted;
    }

    public Question Edit(QuestionDTO question, int id)
    {
        Question questionToEdit = this.GetById(id);
        _context.ChangeTracker.Clear();
        Question questionEdited = new Question()
        {
            created_at = questionToEdit.created_at,
            updated_at = DateTime.Now,
            QuestionText = question.questionText,
            Id = questionToEdit.Id
        };
        _context.Question.Update(questionEdited);
        _context.SaveChanges();
        return questionEdited;
    }

    public QuestionAnswerDTO GetQuestionAnswersByQuestionId(int questionId)
    {
        Question question = this.GetById(questionId);
        _context.ChangeTracker.Clear();
        IEnumerable<Answer> answerList = _answerContext.Answer.Where(e => e.QuestionId == questionId);
        _context.ChangeTracker.Clear();
        List<AnswerByQuestionDTO> answerDtoList = new();
        foreach (Answer answer in answerList)
        {
            AnswerByQuestionDTO answerDto = new()
            {
                AnswerId = answer.Id,
                AnswerText = answer.AnswerText,
                RightAnswer = answer.RightAnswer
            };
            answerDtoList.Add(answerDto);
        };

        QuestionAnswerDTO response = new QuestionAnswerDTO()
        {
            QuestionId = question.Id,
            Question = question.QuestionText,
            Answers = answerDtoList
        };
        return response;
    }
    
    public string Delete(int id)
    {
        try
        {
            _answerService.DeleteAllByQuestionId(id);
            Question answerToDelete = GetById(id);
            _context.ChangeTracker.Clear();
            _context.Question.Remove(answerToDelete);
            _context.SaveChanges();
            return "DELETED";
        }
        catch
        {
            return "NOT DELETED";
        }
    }
}