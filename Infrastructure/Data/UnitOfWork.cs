using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext storeContext;
        private Hashtable repositories;

        public UnitOfWork(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public async Task<int> Complete()
        {
            return await storeContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            storeContext.Dispose();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            if(repositories == null) repositories = new Hashtable();

            var type = typeof(TEntity).Name;

            if(!repositories.Contains(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), storeContext);

                repositories.Add(type, repositoryInstance);
            }

            return (IGenericRepository<TEntity>) repositories[type];
        }
    }
}