using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithBrandsAndTypesSpecification : BaseSpecification<Product>
    {
        public ProductWithBrandsAndTypesSpecification()
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }
    }
}