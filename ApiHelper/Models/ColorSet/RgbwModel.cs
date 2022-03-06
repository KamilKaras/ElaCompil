using ApiHelper.Models.ColorState;

namespace ApiHelper.Models.ColorSet
{
    public class RgbwModel
    {
        public string DesiredColor { get; set; }
        public int EffectID { get; set; }
        public DurationsMs DurationsMs { get; set; }
    }
}
