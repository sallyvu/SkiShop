
using Microsoft. EntityFrameworkCore;
using SkiShop. Entities;

namespace SkiShop. Data
    {
    public class StoreContext : DbContext
        {
        public StoreContext(DbContextOptions options) : base(options)
            {
            }
        public DbSet<Product> Products
            {
            get; set;
            }
        }
    }
