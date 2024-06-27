using Microsoft. EntityFrameworkCore;
using SkiShop. Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder. Services. AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder. Services. AddEndpointsApiExplorer();
builder. Services. AddSwaggerGen();
builder. Services. AddDbContext<StoreContext>(options =>
    options. UseSqlServer(builder. Configuration. GetConnectionString("StoreContext") ?? throw new InvalidOperationException("Connection string 'StoreContext' not found.")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app. Environment. IsDevelopment())
    {
    app. UseSwagger();
    app. UseSwaggerUI();
    }


app. UseAuthorization();

app. MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetService<ILogger<Program>>();

try
    {
    context.Database.Migrate();
    DbInitializer. DbInitialize(context);
    }
catch (Exception ex)
    {
    logger. LogError(ex, "A problem occurred during migration");
    }

app. Run();
