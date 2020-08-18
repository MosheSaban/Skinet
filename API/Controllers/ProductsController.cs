using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Core.Interfaces;
using Core.Specifications;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;

        public ProductsController(IGenericRepository<Product> productRepo,
            IGenericRepository<ProductBrand> productBrandRepo,
            IGenericRepository<ProductType> productTypeRepo)
        {
            _productTypeRepo = productTypeRepo;
            _productBrandRepo = productBrandRepo;
            _productRepo = productRepo;
        }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        var spec = new ProductWithBrandsAndTypesSpecification();
        var products = await _productRepo.ListAsync(spec);
        return Ok(products);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct([FromRoute] int id)
    {
        var res = await _productRepo.GetByIdAsync(id);
        return Ok(res);
    }

    [HttpGet]
    [Route("brands")]
    public async Task<ActionResult<List<Product>>> GetProductBrands()
    {
        var brands = await _productBrandRepo.ListAllAsync();
        return Ok(brands);
    }

    [HttpGet]
    [Route("types")]
    public async Task<ActionResult<List<Product>>> GetProductTypes()
    {
        var types = await _productRepo.ListAllAsync();
        return Ok(types);
    }
}
}