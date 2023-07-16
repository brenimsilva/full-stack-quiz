using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quiz_app.DTOs;

public class AnswerDTO
{
   [Required, StringLength(240)]public string AnswerText { get; set; }
   [Required] public byte RightAnswer { get; set; }
   [Required]public int QuestionId { get; set; }
}