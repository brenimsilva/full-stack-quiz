using System.ComponentModel.DataAnnotations;

namespace quiz_app.DTOs;

public class QuestionDTO
{
    [Required, StringLength(240)] public string questionText { get; set; }
}