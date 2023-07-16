using System.ComponentModel.DataAnnotations;

namespace quiz_app.DTOs;

public class AnswerByQuestionDTO
{
   [Required, StringLength(240)]public string AnswerText { get; set; }
   [Required] public byte RightAnswer { get; set; }
   [Required]public int AnswerId { get; set; }
}