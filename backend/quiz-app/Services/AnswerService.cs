using quiz_app.Context;
using quiz_app.DTOs;
using quiz_app.Models;

namespace quiz_app.Services;

public class AnswerService
{
    private AnswerContext _answerdContext;

    public AnswerService(AnswerContext context)
    {
        this._answerdContext = context;
    }

    public IEnumerable<Answer> GetAll(int skip, int take)
    {
        return _answerdContext.Answer.Skip(skip).Take(take);
    }

    public Answer GetById(int id)
    {
        Answer answer = _answerdContext.Answer.FirstOrDefault(e => e.Id == id);
        return answer;
    }

    public Answer Add(AnswerDTO answer)
    {
        _answerdContext.ChangeTracker.Clear();
        Answer completedAnswer = new Answer()
        {
            Id = 0,
            updated_at = DateTime.Now,
            created_at = DateTime.Now,
            AnswerText = answer.AnswerText,
            QuestionId = answer.QuestionId,
            RightAnswer = answer.RightAnswer
        };
        _answerdContext.Answer.Add(completedAnswer);
        _answerdContext.SaveChanges();
        return completedAnswer;
    }

    public Answer Edit(AnswerDTO answer, int id)
    {
        Answer answerToEdit = this.GetById(id);
        _answerdContext.ChangeTracker.Clear();
        Answer newAnswer = new Answer()
        {
            Id = id,
            created_at = answerToEdit.created_at,
            updated_at = DateTime.Now,
            AnswerText = answer.AnswerText,
            RightAnswer = answer.RightAnswer,
            QuestionId = answer.QuestionId
        };
        _answerdContext.Answer.Update(newAnswer);
        _answerdContext.SaveChanges();
        return newAnswer;
    }

    public string Delete(int id)
    {
        try
        {
            Answer answerToDelete = GetById(id);
            _answerdContext.ChangeTracker.Clear();
            _answerdContext.Answer.Remove(answerToDelete);
            _answerdContext.SaveChanges();
            return "DELETED";
        }
        catch
        {
            return "NOT DELETED";
        }
    }

    public bool DeleteAllByQuestionId(int questionId)
    {
        try
        {
            var answerList = _answerdContext.Answer.ToList();
            var list = answerList.Where(s => s.QuestionId == questionId);
            _answerdContext.RemoveRange(list);
            _answerdContext.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
            
    }
}