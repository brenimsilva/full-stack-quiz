using Microsoft.EntityFrameworkCore;
using quiz_app.DTOs;
using quiz_app.Models;
using quiz_app.Services;

namespace quiz_app.Context
{
    public class QuestionQuery
    {
        public IQueryable<Question> GetQuestions([Service()] QuestionContext _context)
        {
            return _context.Question.Include(e => e.Answers);
        }
    }
}
