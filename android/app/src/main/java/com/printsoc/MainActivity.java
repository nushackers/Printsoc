package com.printsoc;

import android.os.Bundle;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Printsoc";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Intent intent = MainActivity.this.getIntent();
                Bundle bundle = new Bundle();
                if (!Intent.ACTION_SEND.equals(intent.getAction())) return bundle;
                Uri fileUri = (Uri) intent.getParcelableExtra(Intent.EXTRA_STREAM);
                bundle.putString("fileURL", fileUri.toString());
                return bundle;
            }
        };
    }
}
