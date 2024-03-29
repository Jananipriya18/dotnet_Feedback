using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Models{
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options)
        {
        }
        public DbSet<Feedback>Feedbacks{get;set;}
    }
}