namespace GUICall.Models.ColorState
{
    public class Rgbw
    {
        public int ColorMode { get; set; }
        public int EffectID { get; set; }
        public string DesiredColor { get; set; }
        public string CurrentColor { get; set; }
        public string LastOnColor { get; set; }
        public DurationsMs DurationsMs { get; set; }
    }
}
