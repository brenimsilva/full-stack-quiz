namespace quiz_app.DTOs;

public class QuestionAnswerDTO
{
    public int QuestionId { get; set; }
    public string Question { get; set; }
    public IEnumerable<AnswerByQuestionDTO> Answers { get; set; }
}