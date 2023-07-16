using Microsoft.EntityFrameworkCore;
using quiz_app.Models;

namespace quiz_app.Context;

public class QuestionContext : DbContext
{
    public QuestionContext(DbContextOptions<QuestionContext> opt) : base(opt)
    {
        
    }
    
    public DbSet<Question> Question { get; set; }

}