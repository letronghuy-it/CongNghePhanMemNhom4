﻿using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace MuaSamTT_nhom4.Module.MuaSamThoiTrang
{

    public partial class THONG_KE
    {
        public THONG_KE(Session session) : base(session) { }
        public override void AfterConstruction() { base.AfterConstruction(); }
    }

}