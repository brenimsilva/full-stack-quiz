using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using quiz_app.Context;
using quiz_app.DTOs;
using quiz_app.Models;
using quiz_app.Services;

namespace quiz_app.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class QuestionController : ControllerBase
{
    private QuestionContext _context;

    private QuestionService _questionService;
    public QuestionController(QuestionContext context, QuestionService questionService)
    {
        this._context = context;
        this._questionService = questionService;
    }
    
    [HttpGet]
    public IEnumerable<Question> GetAll([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _questionService.GetAll(skip, take);
    }

    [HttpGet("{id}")]
    public ActionResult<Question> GetById(int id)
    {
        return Ok(_questionService.GetById(id));
    }

    [HttpPut("{id}")]
    public ActionResult<Question> Edit([FromBody] QuestionDTO question, int id)
    {
        return Ok(_questionService.Edit(question, id));
    }

    [HttpPost]
    public ActionResult<Question> Add([FromBody] QuestionDTO question)
    {
        Question questionCompleted = _questionService.Add(question);
        return Ok(questionCompleted);
    }

    [HttpGet("{questionId}")]
    public ActionResult<QuestionAnswerDTO> GetQuestionAnswersByQuestionId(int questionId)
    {
        QuestionAnswerDTO questionAnswer = _questionService.GetQuestionAnswersByQuestionId(questionId);
        return Ok(questionAnswer);
    }

    [HttpDelete("{id}")]
    public ActionResult<string> Delete(int id)
    {
        return _questionService.Delete(id);
    }

    [HttpPost]
    public IActionResult AddQuestionWithAnswers([FromBody] AddQuestionDTO question)
    {
        var ok = _questionService.AddQuestionWithAnswers(question);
        return Ok(ok);
    }
}