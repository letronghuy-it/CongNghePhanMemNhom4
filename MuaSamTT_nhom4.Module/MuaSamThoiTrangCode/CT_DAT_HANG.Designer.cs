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
using DevExpress.Persistent.Base;
using DevExpress.ExpressApp;
namespace MuaSamTT_nhom4.Module.MuaSamThoiTrang
{
    [DefaultClassOptions]
    public partial class CT_DAT_HANG : DevExpress.Persistent.BaseImpl.BaseObject
    {
        
        string fMaCT;
        [DevExpress.Xpo.DisplayName(@"Mã Chi Tiết")]
        public string MaCT
        {
            get { return fMaCT; }
            set { SetPropertyValue<string>(nameof(MaCT), ref fMaCT, value); }
        }
        DAT_HANG fMaDH;
        [Association(@"CT_DAT_HANGReferencesDAT_HANG")]
        [DevExpress.Xpo.DisplayName(@"Mã Đặt Hàng")]
        public DAT_HANG MaDH
        {
            get { return fMaDH; }
            set { SetPropertyValue<DAT_HANG>(nameof(MaDH), ref fMaDH, value); }
        }
        SAN_PHAM fMaSP;
        [Association(@"CT_DAT_HANGReferencesSAN_PHAM")]
        [DevExpress.Xpo.DisplayName(@"Mã Sản Phẩm")]
        public SAN_PHAM MaSP
        {
            get { return fMaSP; }
            set { SetPropertyValue<SAN_PHAM>(nameof(MaSP), ref fMaSP, value); }
        }
        int fSoLuong;
        [DevExpress.Xpo.DisplayName(@"Số Lượng")]
        public int SoLuong
        {
            get { return fSoLuong; }
            set { SetPropertyValue<int>(nameof(SoLuong), ref fSoLuong, value); }
        }
        decimal fDonGia;
        [DevExpress.Xpo.DisplayName(@"Đơn Giá")]
        [DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "### ### ### ###"),
DevExpress.ExpressApp.Model.ModelDefault("EditMask", "### ### ### ###")]
        public decimal DonGia
        {
            get { return fDonGia; }
            set { SetPropertyValue<decimal>(nameof(DonGia), ref fDonGia, value); }
        }
        THONG_KE fMaTK;
        [Association(@"CT_DAT_HANGReferencesTHONG_KE")]
        [DevExpress.Xpo.DisplayName(@"Mã Thống Kê")]
        public THONG_KE MaTK
        {
            get { return fMaTK; }
            set { SetPropertyValue<THONG_KE>(nameof(MaTK), ref fMaTK, value); }
        }
        HOA_DON fMaHD;
        [Association(@"CT_DAT_HANGReferencesHOA_DON")]
        [DevExpress.Xpo.DisplayName(@"Mã Hoá Đơn")]
        public HOA_DON MaHD
        {
            get { return fMaHD; }
            set { SetPropertyValue<HOA_DON>(nameof(MaHD), ref fMaHD, value); }
        }
        [DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "### ### ### ###"),
DevExpress.ExpressApp.Model.ModelDefault("EditMask", "### ### ### ###")]
        [DevExpress.Xpo.DisplayName(@"Thành Tiền")]
        [PersistentAlias("ToDecimal([SoLuong]) * [DonGia]")]
        public decimal ThanhTien
        {
            get { return (decimal)(EvaluateAlias(nameof(ThanhTien))); }
        }
    }

}