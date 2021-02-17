using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {
            
        }
        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public Expression<Func<T,bool>> Criteria {get;}
        public List<Expression<Func<T,object>>> Includes {get;} = new List<Expression<Func<T, object>>>();

        public Expression<Func<T, object>> OrderBy {get; private set;}

        public Expression<Func<T, object>> OrderByDescending {get; private set;}

        public int Take {get; private set;}

        public int Skip {get; private set;}

        public bool IsPagindEnabled {get; private set;}

        protected void AddInclude(Expression<Func<T, object>> includeEpression)
        {
            Includes.Add(includeEpression);
        }

        protected void AddOrderBy(Expression<Func<T, object>> orderByEpression)
        {
            OrderBy = orderByEpression;
        }      

        protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescEpression)
        {
            OrderByDescending = orderByDescEpression;
        }   

        protected void ApplyPaging(int skip, int take)
        {
            Skip = skip;
            Take = take;
            IsPagindEnabled = true;
        }         
    }
}