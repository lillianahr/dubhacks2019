function navigateToSign(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("sign-in-page.xml");
}



exports.navigateToSign = navigateToSign;