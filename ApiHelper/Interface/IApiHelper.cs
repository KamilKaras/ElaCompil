using ApiHelper.Models.ColorSet;
using System.Threading.Tasks;

namespace ApiHelper.Interface
{
    public interface IApiHelper
    {
        Task<T> Getinfo<T>();
        Task<T> GetState<T>();
        Task<BaseModel> SetState(BaseModel baseModel);
    }
}
