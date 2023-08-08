using quiz_app.Models;

namespace quiz_app.Context
{
    public class QuestionQuery
    {
        [UseSorting]
        [UseFiltering]
        [UseProjection]
        public IQueryable<Question> GetQuestions()
        {
           return new List<Question>().AsQueryable();
        }
    }
}
