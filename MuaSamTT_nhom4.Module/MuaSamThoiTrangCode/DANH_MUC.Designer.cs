﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace MuaSamTT_nhom4.Module.MuaSamThoiTrang
{

    [DefaultProperty("TenDM")]
    public partial class DANH_MUC : DevExpress.Persistent.BaseImpl.BaseObject
    {
        string fMaDM;
        [DevExpress.Xpo.DisplayName(@"Mã Danh Mục")]
        public string MaDM
        {
            get { return fMaDM; }
            set { SetPropertyValue<string>(nameof(MaDM), ref fMaDM, value); }
        }
        string fTenDM;
        [DevExpress.Xpo.DisplayName(@"Tên Danh Mục")]
        public string TenDM
        {
            get { return fTenDM; }
            set { SetPropertyValue<string>(nameof(TenDM), ref fTenDM, value); }
        }
        [Association(@"SAN_PHAMReferencesDANH_MUC"), Aggregated]
        public XPCollection<SAN_PHAM> SAN_PHAMs { get { return GetCollection<SAN_PHAM>(nameof(SAN_PHAMs)); } }
    }

}
