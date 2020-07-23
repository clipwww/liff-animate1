import { LiffError } from '@/view-models/liff.vm';

const liff = window.liff;
export const installLIFF = async () => {
  const liffId = process.env.VUE_APP_LIFF_ID as string;
  console.log(liff, liffId);

  if (!liffId) {
    return;
  }

  try {
    await liff.init({
      liffId,
    })
  } catch (err) {
    console.log((err as LiffError).message)
  }

  console.log(liff.getVersion())
}

export const sendAlertIfNotInClient = () => {
  alert('這個功能只能在Line裡面使用！')
}

export const scanCode = async () => {
  if (!liff.isInClient()) {
    sendAlertIfNotInClient();
    return;
  }

  if (!liff.scanCode) {
    alert('您的裝置不支援LIFF掃描功能！')
    return;
  }


  try {
    const ret = await liff.scanCode();
    return ret;
  } catch (err) {
    alert(err.message)
    return;
  }
}