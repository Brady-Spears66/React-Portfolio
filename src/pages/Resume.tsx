import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Alert,
  Stack,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Visibility as ViewIcon,
  PictureAsPdf as PdfIcon,
} from "@mui/icons-material";

interface ResumeViewerProps {
  resumeUrl?: string; // Path to your PDF file
  fileName?: string; // Name for downloaded file
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({
  resumeUrl = "/resumes/currentResume.pdf", // Default path - adjust as needed
  fileName = "Brady_Spears_Resume.pdf", // Default filename - adjust as needed
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Failed to download resume. Please try again.");
      console.error("Download error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = () => {
    setShowPdf(!showPdf);
  };

  const handlePdfLoad = () => {
    setError(null);
  };

  const handlePdfError = () => {
    setError("Failed to load PDF. Please try downloading instead.");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack spacing={3} alignItems="center">
          {/* Header */}
          <Box textAlign="center">
            <Typography variant="h4" component="h1" gutterBottom>
              My Resume
            </Typography>
            <Typography variant="body1" color="text.secondary">
              View or download my latest resume
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: "100%", maxWidth: 400 }}
          >
            <Button
              variant="contained"
              startIcon={<ViewIcon />}
              onClick={handleView}
              fullWidth
              sx={{
                backgroundColor: "rgb(25, 190, 207)",
                color: "black",
                "&:hover": {
                  backgroundColor: "rgb(20, 170, 187)",
                },
              }}
            >
              {showPdf ? "Hide Resume" : "View Resume"}
            </Button>

            <Button
              variant="outlined"
              startIcon={
                isLoading ? <CircularProgress size={20} /> : <DownloadIcon />
              }
              onClick={handleDownload}
              disabled={isLoading}
              fullWidth
              sx={{
                borderColor: "rgb(25, 190, 207)",
                color: "rgb(25, 190, 207)",
                "&:hover": {
                  borderColor: "rgb(20, 170, 187)",
                  backgroundColor: "rgba(25, 190, 207, 0.04)",
                },
              }}
            >
              {isLoading ? "Downloading..." : "Download PDF"}
            </Button>
          </Stack>

          {/* Error Message */}
          {error && (
            <Alert
              severity="error"
              sx={{ width: "100%", maxWidth: 600 }}
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}

          {/* PDF Viewer */}
          {showPdf && (
            <Box sx={{ width: "100%", maxWidth: 800 }}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "70vh", md: "80vh" },
                    border: "1px solid #e0e0e0",
                    borderRadius: 1,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <iframe
                    src={resumeUrl}
                    width="100%"
                    height="100%"
                    style={{
                      border: "none",
                      borderRadius: "4px",
                    }}
                    title="Resume PDF"
                    onLoad={handlePdfLoad}
                    onError={handlePdfError}
                  />
                </Box>

                {/* Alternative PDF viewer message */}
                <Typography
                  variant="caption"
                  display="block"
                  textAlign="center"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  If the PDF doesn't display properly, please download it
                  instead.
                </Typography>
              </Paper>
            </Box>
          )}

          {/* Fallback for browsers that don't support PDF viewing */}
          {showPdf && (
            <Box sx={{ display: "none" }}>
              <Stack alignItems="center" spacing={2} sx={{ py: 4 }}>
                <PdfIcon sx={{ fontSize: 48, color: "text.secondary" }} />
                <Typography variant="h6" textAlign="center">
                  PDF Preview Not Available
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="text.secondary"
                >
                  Your browser doesn't support PDF preview. Please download the
                  file to view it.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownload}
                  sx={{
                    backgroundColor: "rgb(25, 190, 207)",
                    color: "black",
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Box>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};

export default ResumeViewer;
