using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quiz_app.Models;

public class Question
{
     [Key, Required]public int Id { get; set; }
     [Required, StringLength(240)]public string QuestionText { get; set; }
     
     public virtual List<Answer> Answers { get; set; }
     public DateTime? created_at { get; set; }
     public DateTime? updated_at { get; set; }
     
}