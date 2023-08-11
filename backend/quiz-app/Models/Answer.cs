using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quiz_app.Models;

public class Answer
{
   [Key, Required]public int Id { get; set; }
   [Required, StringLength(240)]public string AnswerText { get; set; }
   [Required] public byte RightAnswer { get; set; }
   [Column("QuestionId"), ForeignKey("Question")] public int QuestionId { get; set; }
   // public virtual Question Question { get; set; }
   [Required, Column("created_at", TypeName = "DateTime")]public DateTime? created_at { get; set; }
   [Required, Column("updated_at", TypeName = "DateTime")]public DateTime? updated_at { get; set; }
}