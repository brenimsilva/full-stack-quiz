using Microsoft.EntityFrameworkCore;
using quiz_app.Models;

namespace quiz_app.Context;

public class AnswerContext : DbContext
{
    public AnswerContext(DbContextOptions<AnswerContext> opt) : base(opt)
    {
        
    }
    
    public DbSet<Answer> Answer { get; set; }
}