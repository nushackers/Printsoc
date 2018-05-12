/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (void)setAppPropsFileURL:(NSURL *)fileURL {
  NSMutableDictionary *props = [NSMutableDictionary dictionaryWithCapacity:1];
  if (fileURL) props[@"fileURL"] = fileURL.absoluteString;
  self.rootView.appProperties = props;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Printsoc"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  self.rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  [self setAppPropsFileURL:[launchOptions objectForKey:UIApplicationLaunchOptionsURLKey]];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = self.rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
  [self setAppPropsFileURL:url];
  return YES;
}

@end
