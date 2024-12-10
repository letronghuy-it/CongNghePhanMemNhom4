using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace MuaSamTT_nhom4.Module.MuaSamThoiTrang
{

    public partial class NHA_CUNG_CAP
    {
        public NHA_CUNG_CAP(Session session) : base(session) { }
        public override void AfterConstruction() { base.AfterConstruction(); }
    }

}
