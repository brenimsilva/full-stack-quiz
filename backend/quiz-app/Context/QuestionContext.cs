using Microsoft.EntityFrameworkCore;
using quiz_app.Models;

namespace quiz_app.Context;

public class QuestionContext : DbContext
{
    public QuestionContext(DbContextOptions<QuestionContext> opt) : base(opt)
    {
        
    }
    
    public DbSet<Question> Question { get; set; }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     modelBuilder.Entity<Question>().HasMany(e => e.Answers)
    //         .WithOne(e => e.Question)
    //         .HasForeignKey(e => e.QuestionId);
    // }
}