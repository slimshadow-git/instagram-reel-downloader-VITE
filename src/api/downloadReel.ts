interface DownloadResponse {
  download_link: string;
}

export async function downloadReel(reelUrl: string): Promise<string> {
  const response = await fetch(`https://r3hab-ir.hf.space/download/?reel_url=${encodeURIComponent(reelUrl)}`);
  const data: DownloadResponse = await response.json();
  
  if (!data.download_link) {
    throw new Error('Download link not found');
  }
  
  // Ensure we're using the correct domain for the download link
  const downloadUrl = new URL(data.download_link);
  downloadUrl.hostname = 'r3hab-ir.hf.space';
  
  return downloadUrl.toString();
}