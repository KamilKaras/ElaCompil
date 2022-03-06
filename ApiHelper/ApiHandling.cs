using ApiHelper.Interface;
using ApiHelper.Models.ColorSet;
using ApiHelper.Models.ColorState;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ApiHelper
{
    public class ApiHandling : IApiHelper
    {
        private HttpClient HttpClientApi { get; set; }

        public ApiHandling(string url)
        {
            HttpClientApi = new HttpClient();
            HttpClientApi.DefaultRequestHeaders.Accept.Clear();
            HttpClientApi.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("aplication/json"));
            HttpClientApi.BaseAddress = new Uri(url);
        }
        public async Task<T> Getinfo<T>()
        {
            var result = await HttpClientApi.GetAsync("api/rgbw/info");
            if (!result.IsSuccessStatusCode)
            {
                return default(T);
            }
            var myContent = await result.Content.ReadAsStringAsync();
            T device = JsonConvert.DeserializeObject<T>(myContent);
            return device;
        }

        public async Task<T> GetState<T>()
        {
            var result = await HttpClientApi.GetAsync("api/rgbw/state");
            if (!result.IsSuccessStatusCode)
            {
                return default(T);
            }
            var myContent = await result.Content.ReadAsStringAsync();
            T colorState = JsonConvert.DeserializeObject<T>(myContent);
            return colorState;
        }

        public async Task<BaseModel> SetState(BaseModel baseModel)
        {
            if (baseModel is not null)
            {
                var basicModel = new BaseModel
                {
                    Rgbw = new RgbwModel
                    {
                        DesiredColor = baseModel.Rgbw.DesiredColor,
                        EffectID = baseModel.Rgbw.EffectID,
                        DurationsMs = new DurationsMs
                        {
                            ColorFade = baseModel.Rgbw.DurationsMs.ColorFade,
                            EffectFade = baseModel.Rgbw.DurationsMs.EffectFade,
                            EffectStep = baseModel.Rgbw.DurationsMs.EffectStep
                        }
                    }
                };
                var json = JsonConvert.SerializeObject(basicModel);
                var data = new StringContent(json, Encoding.UTF8, "application/json");
                var sendData = await HttpClientApi.PostAsync("api/rgbw/set", data);
                if (sendData.IsSuccessStatusCode)
                {
                    return basicModel;
                }
            }
            return default(BaseModel);
            

        }
    }
}
