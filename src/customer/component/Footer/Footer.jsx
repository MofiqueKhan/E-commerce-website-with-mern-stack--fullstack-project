import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              API status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutturBottoM>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2023 My Company. All Rights Reserved.
            </Typography>

            <Typography variant="body2" component="p" align="center">
                Made with love by Me.
            </Typography>

            <Typography variant="body2" component="p" align="center">
                Icons made By {' '}
                <Link href="https://www.freepik.com" color="inherit" underline="always">
                    Freepik
                </Link>{' '}
                from{' '}
                <Link href="https://www.flaticon.com" color="inherit" underline="always">
                www.flaticon.com
                </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
