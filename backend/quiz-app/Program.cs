using Microsoft.EntityFrameworkCore;
using quiz_app.Context;
using quiz_app.Models;
using quiz_app.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<QuestionService, QuestionService>();
builder.Services.AddScoped<AnswerService, AnswerService>();

//DB Connection
string conString = builder.Configuration.GetConnectionString("QuizConnection");
ServerVersion version = ServerVersion.AutoDetect(conString);
builder.Services.AddDbContext<AnswerContext>(opts => opts.UseMySql(conString, version));
builder.Services.AddDbContext<QuestionContext>(opts => opts.UseMySql(conString, version));

var app = builder.Build();

app.UseCors(e => e.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();