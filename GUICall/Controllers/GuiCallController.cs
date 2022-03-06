using ApiHelper;
using ApiHelper.Models.ColorSet;
using GUICall.Models.ColorState;
using GUICall.Models.Device;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GUICall.Controllers
{
    [ApiController]
    [Route("gui/call")]
    public class GuiCallController: ControllerBase
    {
        private const string url = "https://localhost:44300/";
        private readonly ApiHandling apiHelper;

        public GuiCallController()
        {
            apiHelper = new ApiHandling(url);
        }
        [HttpGet("info")]
        public async Task<IActionResult> GetInfo()
        {
            var deviceData = await apiHelper.Getinfo<DeviceInfo>();
            if(deviceData is not null)
            {
                return Ok(deviceData);
            }
            return NotFound();
            
        }

        [HttpGet("state")]
        public async Task<IActionResult> GetState()
        {
            var deviceData = await apiHelper.GetState<ColorState>();
            if (deviceData is not null)
            {
                return Ok(deviceData);
            }
            return NotFound();

        }

        [HttpPost("set")]
        public async Task<IActionResult> SetState([FromBody] BaseModel baseModel )
        {
            if (ModelState.IsValid)
            {
                var setData = await apiHelper.SetState(baseModel);
                return Ok(setData);
            }
            return new JsonResult("Something went wrong.") { StatusCode = 500 };
        }
        

    }
}
