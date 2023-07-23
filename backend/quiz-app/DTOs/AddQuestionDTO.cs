namespace quiz_app.DTOs;

public class AddQuestionDTO
{
    public string Question { get; set; }
    public IEnumerable<AnswerByQuestionDTO> Answers { get; set; }
}