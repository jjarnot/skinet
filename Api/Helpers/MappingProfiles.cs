using Api.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Api.Dtos;

namespace Api.Helpers {
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());

            CreateMap<Address, AddressDto>().ReverseMap();                
            CreateMap<CustomerBasketDto, CustomerBasket>().ReverseMap();                
            CreateMap<BasketItemDto, BasketItem>().ReverseMap();                
        }
    }
}