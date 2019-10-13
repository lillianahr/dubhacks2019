function navigateToProfile(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("profile-page.xml");
}



exports.navigateToProfile = navigateToProfile;