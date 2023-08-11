using Microsoft.AspNetCore.Mvc;
using quiz_app.Context;
using quiz_app.DTOs;
using quiz_app.Models;
using quiz_app.Services;

namespace quiz_app.Controllers;
[ApiController]
[Route("[controller]")]
public class AnswerController : ControllerBase
{
    
    private AnswerService _answerService;

    public AnswerController(AnswerService service)
    {
        this._answerService = service;
    }
    
    [HttpGet]
    public IEnumerable<Answer> GetAll([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _answerService.GetAll(skip, take);
    }

    [HttpGet("{id}")]
    public ActionResult<Answer> GetById(int id)
    {
        return _answerService.GetById(id);
    }
    // [HttpPost]
    // public ActionResult<Answer> Add([FromBody] AnswerDTO answer)
    // {
    //     Answer completedAnswer = _answerService.Add(answer);
    //     return Ok(answer);
    // }
    //
    // [HttpPut("{id}")]
    // public ActionResult<Answer> Edit([FromBody] AnswerDTO answer, int id)
    // {
    //     Answer editedAnswer = _answerService.Edit(answer, id);
    //     return Ok(editedAnswer);
    // }

    [HttpDelete("{id}")]
    public ActionResult<string> Delete(int id)
    {
        return _answerService.Delete(id);
    }
}