import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Box,
    Typography
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface BookingDialogProps {
    open: boolean;
    onClose: () => void;
}

const BookingDialog = ({ open, onClose }: BookingDialogProps) => {
    const phoneNumber = "+91 98765 43210"; // Create generic placeholder if not found

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { borderRadius: 3, p: 1, maxWidth: 450 }
            }}
        >
            <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
                <Typography variant="h5" fontWeight={700} color="primary">
                    Booking System Update
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ textAlign: 'center', py: 2 }}>
                    <DialogContentText sx={{ mb: 3, fontSize: '1.1rem' }}>
                        Our online appointment system is currently being upgraded to serve you better.
                    </DialogContentText>

                    <Box sx={{
                        bgcolor: 'action.hover',
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center'
                    }}>
                        <Typography variant="body1" fontWeight={600}>
                            Please book your appointment via:
                        </Typography>

                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<WhatsAppIcon />}
                            href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            fullWidth
                            size="large"
                        >
                            WhatsApp Booking
                        </Button>

                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<PhoneIcon />}
                            href={`tel:${phoneNumber}`}
                            fullWidth
                            size="large"
                        >
                            Call Us: {phoneNumber}
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                <Button onClick={onClose} color="inherit" sx={{ px: 4 }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default BookingDialog;
