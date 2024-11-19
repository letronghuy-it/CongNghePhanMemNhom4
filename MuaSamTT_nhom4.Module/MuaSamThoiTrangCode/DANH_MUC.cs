using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace MuaSamTT_nhom4.Module.MuaSamThoiTrang
{

    public partial class DANH_MUC
    {
        public DANH_MUC(Session session) : base(session) { }
        public override void AfterConstruction() { base.AfterConstruction(); }
    }

}
