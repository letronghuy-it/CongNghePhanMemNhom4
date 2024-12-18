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

    [DefaultProperty("TenNV")]
    public partial class NGUOI_GIAO_HANG : DevExpress.Persistent.BaseImpl.BaseObject
    {
        string fMaNGH;
        [DevExpress.Xpo.DisplayName(@"Mã người giao hàng")]
        public string MaNGH
        {
            get { return fMaNGH; }
            set { SetPropertyValue<string>(nameof(MaNGH), ref fMaNGH, value); }
        }
        string ftenNV;
        [DevExpress.Xpo.DisplayName(@"Tên người giao")]
        public string tenNV
        {
            get { return ftenNV; }
            set { SetPropertyValue<string>(nameof(tenNV), ref ftenNV, value); }
        }
        string fdienThoai;
        [DevExpress.Xpo.DisplayName(@"số điện thoại")]
        public string dienThoai
        {
            get { return fdienThoai; }
            set { SetPropertyValue<string>(nameof(dienThoai), ref fdienThoai, value); }
        }
        string fdiaChi;
        [DevExpress.Xpo.DisplayName(@"Địa chỉ")]
        public string diaChi
        {
            get { return fdiaChi; }
            set { SetPropertyValue<string>(nameof(diaChi), ref fdiaChi, value); }
        }
        string fGhiChu;
        [DevExpress.Xpo.DisplayName(@"Ghi chú")]
        public string GhiChu
        {
            get { return fGhiChu; }
            set { SetPropertyValue<string>(nameof(GhiChu), ref fGhiChu, value); }
        }
        int fTrangThai;
        [DevExpress.Xpo.DisplayName(@"Trạng Thái")]
        public int TrangThai
        {
            get { return fTrangThai; }
            set { SetPropertyValue<int>(nameof(TrangThai), ref fTrangThai, value); }
        }
        [Association(@"DAT_HANGReferencesNGUOI_GIAO_HANG")]
        public XPCollection<DAT_HANG> DAT_HANGs { get { return GetCollection<DAT_HANG>(nameof(DAT_HANGs)); } }
    }

}
